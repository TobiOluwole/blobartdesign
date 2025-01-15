<?php

namespace App\Http\Services;

use App\Models\Sections;
use App\Models\Socials;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class SectionsService {

    public function setSocials($data){
        return response()->json(Socials::updateOrCreate(
            ['id' => 1],
            $data
        ));
    }
    public function getSocials(){
        return response()->json(Socials::where('id', 1)->first());
    }

    public function getPageSections($page_id){
        return response()->json(Sections::where('page_id', $page_id)->orderBy('sort_id', 'asc')->get());
    }

    public function updateSections($sections)
    {
        $sortId = 0;
        $newSectionIds = [];
        $pageId = 0;
//
//        foreach ($sections as &$section) { // Use reference to modify $section directly
//            $section['sort_id'] = $sortId;
//            $lastId = $section['id'] ?? (Sections::orderBy('id', 'ASC')->first()?->id + 1 ?? 0);
//            $newSectionIds[] = $lastId;
//            $pageId = $section['page_id'] ?? 0;
//
//            if($section['type'] === 'hero') {
//                // Check if 'content' exists and process it
//                if (isset($section['content']) && is_array($section['content'])) {
//                    foreach ($section['content'] as $slideIndex => &$contentItem) { // Use reference for content item
//                        if (isset($contentItem['image']) && $this->isBase64Image($contentItem['image'])) {
//                            // Decode and save the base64 image, ensuring old images are overwritten
//                            $filePath = $this->storeBase64Image($contentItem['image'], $lastId, $slideIndex);
//                            $contentItem['image'] = $filePath; // Replace base64 with file URL
//                        }
//                    }
//                }
//            }elseif ($section['type'] === 'gallery') {
//                foreach ($section['content']['galleries'] as $groupIndex => &$group) {
//                    if (isset($group['images']) && is_array($group['images'])) {
//                        foreach ($group['images'] as $imageIndex => &$image) {
//                            if ($this->isBase64Image($image)) {
//                                $filePath = $this->storeBase64Image($image, $lastId, $groupIndex, $imageIndex);
//                                $image = $filePath; // Replace base64 with file URL
//                            }
//                        }
//                    }
//                }
//            }elseif ($section['type'] === 'banner'){
//                if (isset($section['content']['image']) && $this->isBase64Image($section['content']['image'])) {
//                    // Decode and save the base64 image, ensuring old images are overwritten
//                    $filePath = $this->storeBase64Image($section['content']['image'], $lastId, 0);
//                    $section['content']['image'] = $filePath; // Replace base64 with file URL
//                }
//            } elseif ($section['type'] === 'team') {
//                // Process 'team' type sections
//                if (isset($section['content']['members']) && is_array($section['content']['members'])) {
//                    foreach ($section['content']['members'] as $memberIndex => &$member) {
//                        if (isset($member['image']) && $this->isBase64Image($member['image'])) {
//                            $filePath = $this->storeBase64Image($member['image'], $lastId, $memberIndex);
//                            $member['image'] = $filePath;
//                        }
//                    }
//                }
//            }
//
//            // Save or update section
//            if (isset($section['id']) && $section['id'] > 0) {
//                Sections::where('id', $section['id'])->update($section);
//            } else {
//                $sectionToSave = new Sections($section);
//                $sectionToSave->save();
//                $newSectionIds[] = $sectionToSave->id;
//            }
//
//            $sortId++;
//        }

        foreach ($sections as &$section) {
            $section['sort_id'] = $sortId;
            $pageId = $section['page_id'] ?? 0;

            // Handle images based on the section type
            if ($section['type'] === 'hero') {
                if (isset($section['content']) && is_array($section['content'])) {
                    foreach ($section['content'] as $slideIndex => &$contentItem) {
                        if (isset($contentItem['image']) && $this->isBase64Image($contentItem['image'])) {
                            $contentItem['image'] = $this->storeBase64Image($contentItem['image'], $section['id'] ?? 'temp', $slideIndex);
                        }
                    }
                }
            } elseif ($section['type'] === 'gallery') {
                if (isset($section['content']['galleries'])) {
                    foreach ($section['content']['galleries'] as $groupIndex => &$group) {
                        if (isset($group['images']) && is_array($group['images'])) {
                            foreach ($group['images'] as $imageIndex => &$image) {
                                if ($this->isBase64Image($image)) {
                                    $image = $this->storeBase64Image($image, $section['id'] ?? 'temp', $groupIndex, $imageIndex);
                                }
                            }
                        }
                    }
                }
            } elseif ($section['type'] === 'banner') {
                if (isset($section['content']['image']) && $this->isBase64Image($section['content']['image'])) {
                    $section['content']['image'] = $this->storeBase64Image($section['content']['image'], $section['id'] ?? 'temp', 0);
                }
            } elseif ($section['type'] === 'team') {
                if (isset($section['content']['members']) && is_array($section['content']['members'])) {
                    foreach ($section['content']['members'] as $memberIndex => &$member) {
                        if (isset($member['image']) && $this->isBase64Image($member['image'])) {
                            $member['image'] = $this->storeBase64Image($member['image'], $section['id'] ?? 'temp', $memberIndex);
                        }
                    }
                }
            }

            // Save or update the section
            if (isset($section['id']) && $section['id'] > 0) {
                Sections::where('id', $section['id'])->update($section);
                $newSectionIds[] = $section['id'];
            } else {
                $sectionToSave = new Sections($section);
                $sectionToSave->save();

                // Update temporary image paths with the new ID
                $tempId = 'temp';
                $newId = $sectionToSave->id;
                Storage::move("uploads/sections/{$tempId}_", "uploads/sections/{$newId}_");

                $newSectionIds[] = $newId;
            }

            $sortId++;
        }


        $this->deleteOldSections($newSectionIds, $pageId);
        return response()->json();
    }

    public function deleteSections($id){
        $section = Sections::find($id);

        if ($section) {
            // Delete the associated images if necessary (for example, delete files from the server)
            $this->deleteSectionImages($section);

            // Delete the section from the database
            $section->delete();

            return response()->json(['message' => 'Section deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'Section not found.'], 404);
        }
    }


    /**
     * Check if a string is a valid base64 image.
     */
    private function isBase64Image($data)
    {
        return preg_match('/^data:image\/(\w+);base64,/', $data);
    }

    /**
     * Store a base64 image in Laravel storage.
     */
    private function storeBase64Image($base64Image, $sectionId, $slideIndex, $imageIndex = 0)
    {
        // Extract the file extension from the base64 data
        preg_match('/^data:image\/(\w+);base64,/', $base64Image, $matches);
        $extension = $matches[1] ?? 'png'; // Default to PNG if extension not found

        // Remove the base64 header
        $base64Image = preg_replace('/^data:image\/\w+;base64,/', '', $base64Image);
        $base64Image = base64_decode($base64Image);

        // Generate a consistent file name
        $fileName = "section_{$sectionId}_slide_{$slideIndex}_{$imageIndex}_".chr(mt_rand(ord('a'), ord('z'))).substr(md5(time()), 1).".{$extension}";

        // File path in the storage
        $filePath = 'uploads/sections/' . $fileName;

        // Delete the old file if it exists
        if (Storage::exists($filePath)) {
            Storage::delete($filePath);
        }

        // Save the new file
        Storage::disk('public')->put($filePath, $base64Image);

        return Storage::url($filePath); // Return the publicly accessible URL
    }

    private function deleteSectionImages($section)
    {
        // Check if images are present and delete them from the server
        if (isset($section->content) && is_array($section->content)) {
            foreach ($section->content as $contentItem) {
                if (isset($contentItem['image'])) {
                    // Remove the image from the storage (if it's a file path)
                    $imagePath = public_path($contentItem['image']);
                    if (file_exists($imagePath)) {
                        unlink($imagePath);
                    }
                }
            }
        }

        if (isset($section->content['image'])) {
            // Remove the image from the storage (if it's a file path)
            $imagePath = public_path($section->content['image']);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }


        // Check if images are present and delete them from the server
        if (isset($section->content[0]['images']) && is_array($section->content[0]['images'])) {
            foreach ($section->content as $contentArray) {
                foreach ($contentArray->images as $contentItem) {
                    // Remove the image from the storage (if it's a file path)
                    $imagePath = public_path($contentItem);
                    if (file_exists($imagePath)) {
                        unlink($imagePath);
                    }
                }
            }
        }

    }

    /**
     * Delete old sections and their associated images.
     */
    private function deleteOldSections($newSectionIds, $pageId)
    {
        // Find sections to delete
        $sectionsToDelete = Sections::whereNotIn('id', $newSectionIds)->where('page_id', $pageId)->get();

        foreach ($sectionsToDelete as $section) {
            if (isset($section->content)) {
                foreach ($section->content as $contentItem) {
                    if (isset($contentItem['image'])) {
                        // Remove the image from storage
                        Storage::disk('public')->delete($contentItem['image']);
                    }
                }
            }

            // Delete the section itself
            $section->delete();
        }
    }

    public function getGalleryImages($section_id, $gallery_name){
        $section = Sections::where('id', $section_id)->first();


        if($section && isset($section['content']['galleries'])){
            $images = array_find($section['content']['galleries'], function($item) use ($gallery_name){
                if(isset($item['name_en']) && isset($item['name_tr']) && isset($item['images']) && ($item['name_tr'] == $gallery_name || $item['name_en'] == $gallery_name)){
                    return true;
                }
            });

            return response()->json($images['images'], 200);
        }

        return response()->json(null, 404);
    }

    public function verifyGoogleCaptchaToken($token){
        $response = Http::asForm()->withoutVerifying()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => env('RECAPTCHA_SECRET'),
            'response' => $token,
        ]);

        return response()->json($response->json());
    }
}

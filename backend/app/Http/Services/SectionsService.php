<?php

namespace App\Http\Services;

use App\Models\Sections;
use App\Models\Socials;
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

        foreach ($sections as &$section) { // Use reference to modify $section directly
            $section['sort_id'] = $sortId;
            $lastId = $section['id'] ?? (Sections::orderBy('id', 'ASC')->first()?->id + 1 ?? 0);
            $newSectionIds[] = $lastId;
            $pageId = $section['page_id'] ?? 0;

            if($section['type'] === 'hero') {
                // Check if 'content' exists and process it
                if (isset($section['content']) && is_array($section['content'])) {
                    foreach ($section['content'] as $slideIndex => &$contentItem) { // Use reference for content item
                        if (isset($contentItem['image']) && $this->isBase64Image($contentItem['image'])) {
                            // Decode and save the base64 image, ensuring old images are overwritten
                            $filePath = $this->storeBase64Image($contentItem['image'], $lastId, $slideIndex);
                            $contentItem['image'] = $filePath; // Replace base64 with file URL
                        }
                    }
                }
            }elseif ($section['type'] === 'banner'){
                if (isset($section['content']['image']) && $this->isBase64Image($section['content']['image'])) {
                    // Decode and save the base64 image, ensuring old images are overwritten
                    $filePath = $this->storeBase64Image($section['content']['image'], $lastId, 0);
                    $section['content']['image'] = $filePath; // Replace base64 with file URL
                }
            }

            // Save or update section
            if (isset($section['id']) && $section['id'] > 0) {
                Sections::where('id', $section['id'])->update($section);
            } else {
                $sectionToSave = new Sections($section);
                $sectionToSave->save();
                $newSectionIds[] = $sectionToSave->id;
            }

            $sortId++;
        }

        $this->deleteOldSections($newSectionIds, $pageId);
        return response()->json();
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
    private function storeBase64Image($base64Image, $sectionId, $slideIndex)
    {
        // Extract the file extension from the base64 data
        preg_match('/^data:image\/(\w+);base64,/', $base64Image, $matches);
        $extension = $matches[1] ?? 'png'; // Default to PNG if extension not found

        // Remove the base64 header
        $base64Image = preg_replace('/^data:image\/\w+;base64,/', '', $base64Image);
        $base64Image = base64_decode($base64Image);

        // Generate a consistent file name
        $fileName = "section_{$sectionId}_slide_{$slideIndex}.{$extension}";

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
}

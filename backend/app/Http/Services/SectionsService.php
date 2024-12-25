<?php

namespace App\Http\Services;

use App\Models\Sections;

class SectionsService {

    public function getPageSections($page_id){
        return response()->json(Sections::where('page_id', $page_id)->get());
    }

    public function updateSections($sections){
        $sortId = 0;
        foreach ($sections as $section) {
            $section['sort_id'] = $sortId;
            error_log(json_encode($section));
            if (isset($section['id']) && $section['id'] > 0) {
                Sections::where('id', $section['id'])->update($section);
            } else {
                $sectionToSave = new Sections($section);
                $sectionToSave->save();
            }
            $sortId++;
        }

        return response()->json();
    }
}

<?php


namespace App\Http\Repositories;

use App\Models\Image;


class ImageRepository
{
    public function create($imageData) {
        $image = new Image();
        $image->title = $imageData['title'];
        $image->link = $imageData['link'];
        $image->save();
        return $image;
    }

    public function index() {
        return Image::orderBy('id', 'desc')->paginate(9);
    }

    public function get($id) {
        return Image::where('id', $id)->first();
    }
}
<?php


namespace App\Http\Services;
use App\Http\Requests\ImageCreateRequest;

interface ImageService
{
    public function create(ImageCreateRequest $request);
    public function index();
    public function get($id);
}
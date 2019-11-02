<?php

namespace App\Http\Controllers\Api\V1;
use App\Http\Controllers\Controller;
use App\Http\Requests\ImageCreateRequest;
use App\Http\Services\Implementations\ImageServiceImplementation;

class ImageController extends Controller
{
    /**
     * @var ImageServiceImplementation
     */
    private $imageService;

    public function __construct() {
        $this->imageService = new ImageServiceImplementation();
    }

    public function create(ImageCreateRequest $request) {
        return response()->json($this->imageService->create($request));
    }

    public function index() {
        return response()->json($this->imageService->index());
    }

    public function get($id) {
        return response()->json($this->imageService->get($id));
    }
}

<?php


namespace App\Http\Services\Implementations;


use App\Http\Repositories\ImageRepository;
use App\Http\Requests\ImageCreateRequest;
use App\Http\Services\ImageService;
use http\Exception\RuntimeException;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ImageServiceImplementation implements ImageService
{
    /**
     * @var ImageRepository
     */
    private $imageRepository;

    public function __construct() {
        $this->imageRepository = new ImageRepository();
    }

    public function create(ImageCreateRequest $request) {
        // TODO: Implement storeImageRecords() method.
        $storedFile = $this->storeImage($request->file('image'));
        if ($storedFile == false) {
            throw new RuntimeException('failed to store uploaded file.');
        }
        $image = $this->imageRepository->create([
            'title' => $request->title,
            'link' => Storage::url($storedFile)
        ]);

        return $image;
    }

    public function index() {
        return $this->imageRepository->index();
    }

    public function get($id) {
        return $this->imageRepository->get($id);
    }

    private function storeImage(UploadedFile $file) {
        return $file->storePublicly('public/uploads');
    }
}
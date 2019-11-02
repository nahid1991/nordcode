<?php

Route::group(['namespace_prefix' => 'Api\V1'], function () {
    Route::prefix('/images')->group(function () {
        Route::post('/upload', 'ImageController@create');
        Route::get('/', 'ImageController@index');
        Route::get('/{id}', 'ImageController@get');
    });
});

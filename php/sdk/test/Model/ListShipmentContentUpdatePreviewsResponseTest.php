<?php
/**
 * ListShipmentContentUpdatePreviewsResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\fulfillment\inbound\v2024_03_20\ListShipmentContentUpdatePreviewsResponse;

/**
 * ListShipmentContentUpdatePreviewsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;ListShipmentContentUpdatePreviews&#x60; response.
 * @package     SpApi
 */
class ListShipmentContentUpdatePreviewsResponseTest extends TestCase
{

    private ListShipmentContentUpdatePreviewsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListShipmentContentUpdatePreviewsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListShipmentContentUpdatePreviewsResponse"
     */
    public function testListShipmentContentUpdatePreviewsResponse()
    {
        $this->assertInstanceOf(ListShipmentContentUpdatePreviewsResponse::class, $this->model);
    }

    /**
     * Test attribute "content_update_previews"
     */
    public function testPropertyContentUpdatePreviews()
    {
        $testValue = [];
        
        $this->model->setContentUpdatePreviews($testValue);
        $this->assertEquals($testValue, $this->model->getContentUpdatePreviews());
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}

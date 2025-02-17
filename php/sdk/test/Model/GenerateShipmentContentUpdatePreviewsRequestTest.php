<?php
/**
 * GenerateShipmentContentUpdatePreviewsRequestTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\GenerateShipmentContentUpdatePreviewsRequest;

/**
 * GenerateShipmentContentUpdatePreviewsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;GenerateShipmentContentUpdatePreviews&#x60; request.
 * @package     SpApi
 */
class GenerateShipmentContentUpdatePreviewsRequestTest extends TestCase
{

    private GenerateShipmentContentUpdatePreviewsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerateShipmentContentUpdatePreviewsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerateShipmentContentUpdatePreviewsRequest"
     */
    public function testGenerateShipmentContentUpdatePreviewsRequest()
    {
        $this->assertInstanceOf(GenerateShipmentContentUpdatePreviewsRequest::class, $this->model);
    }

    /**
     * Test attribute "boxes"
     */
    public function testPropertyBoxes()
    {
        $testValue = [];
        
        $this->model->setBoxes($testValue);
        $this->assertEquals($testValue, $this->model->getBoxes());
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }
}

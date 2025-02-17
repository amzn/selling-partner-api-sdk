<?php
/**
 * UpdateShipmentNameRequestTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\UpdateShipmentNameRequest;

/**
 * UpdateShipmentNameRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;updateShipmentName&#x60; request.
 * @package     SpApi
 */
class UpdateShipmentNameRequestTest extends TestCase
{

    private UpdateShipmentNameRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateShipmentNameRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateShipmentNameRequest"
     */
    public function testUpdateShipmentNameRequest()
    {
        $this->assertInstanceOf(UpdateShipmentNameRequest::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }
}

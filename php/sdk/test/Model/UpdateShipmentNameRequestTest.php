<?php
/**
 * UpdateShipmentNameRequestTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentNameRequest;

/**
 * UpdateShipmentNameRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;updateShipmentName&#x60; request.
 * @package     OpenAPI\Client
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

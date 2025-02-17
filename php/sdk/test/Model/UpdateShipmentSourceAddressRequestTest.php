<?php
/**
 * UpdateShipmentSourceAddressRequestTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\UpdateShipmentSourceAddressRequest;

/**
 * UpdateShipmentSourceAddressRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;UpdateShipmentSourceAddress&#x60; request.
 * @package     SpApi
 */
class UpdateShipmentSourceAddressRequestTest extends TestCase
{

    private UpdateShipmentSourceAddressRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateShipmentSourceAddressRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateShipmentSourceAddressRequest"
     */
    public function testUpdateShipmentSourceAddressRequest()
    {
        $this->assertInstanceOf(UpdateShipmentSourceAddressRequest::class, $this->model);
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\AddressInput();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }
}

<?php
/**
 * GetUnmanifestedShipmentsResponseTest
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
use SpApi\Model\shipping\v2\GetUnmanifestedShipmentsResponse;

/**
 * GetUnmanifestedShipmentsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the GetUnmanifestedShipmentsResponse operation.
 * @package     SpApi
 */
class GetUnmanifestedShipmentsResponseTest extends TestCase
{

    private GetUnmanifestedShipmentsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetUnmanifestedShipmentsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetUnmanifestedShipmentsResponse"
     */
    public function testGetUnmanifestedShipmentsResponse()
    {
        $this->assertInstanceOf(GetUnmanifestedShipmentsResponse::class, $this->model);
    }

    /**
     * Test attribute "unmanifested_carrier_information_list"
     */
    public function testPropertyUnmanifestedCarrierInformationList()
    {
        $testValue = [];
        
        $this->model->setUnmanifestedCarrierInformationList($testValue);
        $this->assertEquals($testValue, $this->model->getUnmanifestedCarrierInformationList());
    }
}

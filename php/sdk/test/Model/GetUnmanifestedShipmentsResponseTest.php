<?php
/**
 * GetUnmanifestedShipmentsResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\shipping\GetUnmanifestedShipmentsResponse;

/**
 * GetUnmanifestedShipmentsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the GetUnmanifestedShipmentsResponse operation.
 * @package     OpenAPI\Client
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

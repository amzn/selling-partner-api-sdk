<?php
/**
 * GetAdditionalSellerInputsResultTest
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
use SpApi\Model\merchantFulfillment\v0\GetAdditionalSellerInputsResult;

/**
 * GetAdditionalSellerInputsResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the &#x60;getAdditionalSellerInputs&#x60; operation.
 * @package     SpApi
 */
class GetAdditionalSellerInputsResultTest extends TestCase
{

    private GetAdditionalSellerInputsResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAdditionalSellerInputsResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAdditionalSellerInputsResult"
     */
    public function testGetAdditionalSellerInputsResult()
    {
        $this->assertInstanceOf(GetAdditionalSellerInputsResult::class, $this->model);
    }

    /**
     * Test attribute "shipment_level_fields"
     */
    public function testPropertyShipmentLevelFields()
    {
        $testValue = [];
        
        $this->model->setShipmentLevelFields($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentLevelFields());
    }

    /**
     * Test attribute "item_level_fields_list"
     */
    public function testPropertyItemLevelFieldsList()
    {
        $testValue = [];
        
        $this->model->setItemLevelFieldsList($testValue);
        $this->assertEquals($testValue, $this->model->getItemLevelFieldsList());
    }
}

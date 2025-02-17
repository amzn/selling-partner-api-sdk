<?php
/**
 * ReturnLocationTest
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
use SpApi\Model\supplySources\v2020_07_01\ReturnLocation;

/**
 * ReturnLocationTest Class Doc Comment
 *
 * @category    Class
 * @description The address or reference to another &#x60;supplySourceId&#x60; to act as a return location.
 * @package     SpApi
 */
class ReturnLocationTest extends TestCase
{

    private ReturnLocation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReturnLocation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReturnLocation"
     */
    public function testReturnLocation()
    {
        $this->assertInstanceOf(ReturnLocation::class, $this->model);
    }

    /**
     * Test attribute "supply_source_id"
     */
    public function testPropertySupplySourceId()
    {
        $testValue = 'test';
        
        $this->model->setSupplySourceId($testValue);
        $this->assertEquals($testValue, $this->model->getSupplySourceId());
    }

    /**
     * Test attribute "address_with_contact"
     */
    public function testPropertyAddressWithContact()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\AddressWithContact();
        
        $this->model->setAddressWithContact($testValue);
        $this->assertEquals($testValue, $this->model->getAddressWithContact());
    }
}

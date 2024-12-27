<?php
/**
 * PackingOptionTest
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
use OpenAPI\Client\Model\fulfillmentinbound\PackingOption;

/**
 * PackingOptionTest Class Doc Comment
 *
 * @category    Class
 * @description A packing option contains a set of pack groups plus additional information about the packing option, such as any discounts or fees if it&#39;s selected.
 * @package     OpenAPI\Client
 */
class PackingOptionTest extends TestCase
{

    private PackingOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackingOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackingOption"
     */
    public function testPackingOption()
    {
        $this->assertInstanceOf(PackingOption::class, $this->model);
    }

    /**
     * Test attribute "discounts"
     */
    public function testPropertyDiscounts()
    {
        $testValue = [];
        
        $this->model->setDiscounts($testValue);
        $this->assertEquals($testValue, $this->model->getDiscounts());
    }

    /**
     * Test attribute "expiration"
     */
    public function testPropertyExpiration()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiration($testValue);
        $this->assertEquals($testValue, $this->model->getExpiration());
    }

    /**
     * Test attribute "fees"
     */
    public function testPropertyFees()
    {
        $testValue = [];
        
        $this->model->setFees($testValue);
        $this->assertEquals($testValue, $this->model->getFees());
    }

    /**
     * Test attribute "packing_groups"
     */
    public function testPropertyPackingGroups()
    {
        $testValue = [];
        
        $this->model->setPackingGroups($testValue);
        $this->assertEquals($testValue, $this->model->getPackingGroups());
    }

    /**
     * Test attribute "packing_option_id"
     */
    public function testPropertyPackingOptionId()
    {
        $testValue = 'test';
        
        $this->model->setPackingOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getPackingOptionId());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $testValue = 'test';
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "supported_shipping_configurations"
     */
    public function testPropertySupportedShippingConfigurations()
    {
        $testValue = [];
        
        $this->model->setSupportedShippingConfigurations($testValue);
        $this->assertEquals($testValue, $this->model->getSupportedShippingConfigurations());
    }
}

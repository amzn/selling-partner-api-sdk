<?php
/**
 * DeliveryPreferencesTest
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
use OpenAPI\Client\Model\orders\DeliveryPreferences;

/**
 * DeliveryPreferencesTest Class Doc Comment
 *
 * @category    Class
 * @description Contains all of the delivery instructions provided by the customer for the shipping address.
 * @package     OpenAPI\Client
 */
class DeliveryPreferencesTest extends TestCase
{

    private DeliveryPreferences $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryPreferences();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryPreferences"
     */
    public function testDeliveryPreferences()
    {
        $this->assertInstanceOf(DeliveryPreferences::class, $this->model);
    }

    /**
     * Test attribute "drop_off_location"
     */
    public function testPropertyDropOffLocation()
    {
        $testValue = 'test';
        
        $this->model->setDropOffLocation($testValue);
        $this->assertEquals($testValue, $this->model->getDropOffLocation());
    }

    /**
     * Test attribute "preferred_delivery_time"
     */
    public function testPropertyPreferredDeliveryTime()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\PreferredDeliveryTime();
        
        $this->model->setPreferredDeliveryTime($testValue);
        $this->assertEquals($testValue, $this->model->getPreferredDeliveryTime());
    }

    /**
     * Test attribute "other_attributes"
     */
    public function testPropertyOtherAttributes()
    {
        $testValue = [];
        
        $this->model->setOtherAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getOtherAttributes());
    }

    /**
     * Test attribute "address_instructions"
     */
    public function testPropertyAddressInstructions()
    {
        $testValue = 'test';
        
        $this->model->setAddressInstructions($testValue);
        $this->assertEquals($testValue, $this->model->getAddressInstructions());
    }
}

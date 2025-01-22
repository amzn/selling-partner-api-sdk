<?php
/**
 * DeliveryPreferencesTest
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
use OpenAPI\Client\Model\fulfillment\outbound\DeliveryPreferences;

/**
 * DeliveryPreferencesTest Class Doc Comment
 *
 * @category    Class
 * @description The delivery preferences applied to the destination address. These preferences are applied when possible and are best effort. This feature is currently supported only in the JP marketplace and not applicable for other marketplaces. For eligible orders, the default delivery preference will be to deliver the package unattended at the front door, unless you specify otherwise.
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
     * Test attribute "delivery_instructions"
     */
    public function testPropertyDeliveryInstructions()
    {
        $testValue = 'test';
        
        $this->model->setDeliveryInstructions($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryInstructions());
    }

    /**
     * Test attribute "drop_off_location"
     */
    public function testPropertyDropOffLocation()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\DropOffLocation();
        
        $this->model->setDropOffLocation($testValue);
        $this->assertEquals($testValue, $this->model->getDropOffLocation());
    }
}

<?php
/**
 * ValueAddedServiceDetailsTest
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
use OpenAPI\Client\Model\shipping\v2\ValueAddedServiceDetails;

/**
 * ValueAddedServiceDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description A collection of supported value-added services.
 * @package     OpenAPI\Client
 */
class ValueAddedServiceDetailsTest extends TestCase
{

    private ValueAddedServiceDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ValueAddedServiceDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ValueAddedServiceDetails"
     */
    public function testValueAddedServiceDetails()
    {
        $this->assertInstanceOf(ValueAddedServiceDetails::class, $this->model);
    }

    /**
     * Test attribute "collect_on_delivery"
     */
    public function testPropertyCollectOnDelivery()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\v2\CollectOnDelivery();
        
        $this->model->setCollectOnDelivery($testValue);
        $this->assertEquals($testValue, $this->model->getCollectOnDelivery());
    }
}

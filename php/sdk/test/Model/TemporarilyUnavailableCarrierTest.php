<?php
/**
 * TemporarilyUnavailableCarrierTest
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
use OpenAPI\Client\Model\merchantFulfillment\v0\TemporarilyUnavailableCarrier;

/**
 * TemporarilyUnavailableCarrierTest Class Doc Comment
 *
 * @category    Class
 * @description A carrier who is temporarily unavailable, most likely due to a service outage experienced by the carrier.
 * @package     OpenAPI\Client
 */
class TemporarilyUnavailableCarrierTest extends TestCase
{

    private TemporarilyUnavailableCarrier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TemporarilyUnavailableCarrier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TemporarilyUnavailableCarrier"
     */
    public function testTemporarilyUnavailableCarrier()
    {
        $this->assertInstanceOf(TemporarilyUnavailableCarrier::class, $this->model);
    }

    /**
     * Test attribute "carrier_name"
     */
    public function testPropertyCarrierName()
    {
        $testValue = 'test';
        
        $this->model->setCarrierName($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierName());
    }
}

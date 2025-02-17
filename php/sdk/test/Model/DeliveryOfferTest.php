<?php
/**
 * DeliveryOfferTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\DeliveryOffer;

/**
 * DeliveryOfferTest Class Doc Comment
 *
 * @category    Class
 * @description An available offer for delivery of a product.
 * @package     SpApi
 */
class DeliveryOfferTest extends TestCase
{

    private DeliveryOffer $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryOffer();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryOffer"
     */
    public function testDeliveryOffer()
    {
        $this->assertInstanceOf(DeliveryOffer::class, $this->model);
    }

    /**
     * Test attribute "expires_at"
     */
    public function testPropertyExpiresAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiresAt($testValue);
        $this->assertEquals($testValue, $this->model->getExpiresAt());
    }

    /**
     * Test attribute "date_range"
     */
    public function testPropertyDateRange()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\DateRange();
        
        $this->model->setDateRange($testValue);
        $this->assertEquals($testValue, $this->model->getDateRange());
    }

    /**
     * Test attribute "policy"
     */
    public function testPropertyPolicy()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\DeliveryPolicy();
        
        $this->model->setPolicy($testValue);
        $this->assertEquals($testValue, $this->model->getPolicy());
    }
}

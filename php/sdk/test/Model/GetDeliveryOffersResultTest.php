<?php
/**
 * GetDeliveryOffersResultTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\GetDeliveryOffersResult;

/**
 * GetDeliveryOffersResultTest Class Doc Comment
 *
 * @category    Class
 * @description A list of delivery offers, including offer expiration, earliest and latest date and time range, and the delivery offer policy.
 * @package     SpApi
 */
class GetDeliveryOffersResultTest extends TestCase
{

    private GetDeliveryOffersResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetDeliveryOffersResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetDeliveryOffersResult"
     */
    public function testGetDeliveryOffersResult()
    {
        $this->assertInstanceOf(GetDeliveryOffersResult::class, $this->model);
    }

    /**
     * Test attribute "delivery_offers"
     */
    public function testPropertyDeliveryOffers()
    {
        $testValue = [];
        
        $this->model->setDeliveryOffers($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryOffers());
    }
}

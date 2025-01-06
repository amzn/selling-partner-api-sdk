<?php
/**
 * GetDeliveryOffersTermsTest
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
use OpenAPI\Client\Model\fulfillmentOutbound\GetDeliveryOffersTerms;

/**
 * GetDeliveryOffersTermsTest Class Doc Comment
 *
 * @category    Class
 * @description The delivery terms for the delivery offer.
 * @package     OpenAPI\Client
 */
class GetDeliveryOffersTermsTest extends TestCase
{

    private GetDeliveryOffersTerms $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetDeliveryOffersTerms();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetDeliveryOffersTerms"
     */
    public function testGetDeliveryOffersTerms()
    {
        $this->assertInstanceOf(GetDeliveryOffersTerms::class, $this->model);
    }

    /**
     * Test attribute "origin"
     */
    public function testPropertyOrigin()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentOutbound\Origin();
        
        $this->model->setOrigin($testValue);
        $this->assertEquals($testValue, $this->model->getOrigin());
    }

    /**
     * Test attribute "destination"
     */
    public function testPropertyDestination()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentOutbound\Destination();
        
        $this->model->setDestination($testValue);
        $this->assertEquals($testValue, $this->model->getDestination());
    }
}

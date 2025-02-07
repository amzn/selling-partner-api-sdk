<?php
/**
 * GetDeliveryOffersRequestTest
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
use OpenAPI\Client\Model\fulfillment\outbound\v2020_07_01\GetDeliveryOffersRequest;

/**
 * GetDeliveryOffersRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body schema for the getDeliveryOffers operation.
 * @package     OpenAPI\Client
 */
class GetDeliveryOffersRequestTest extends TestCase
{

    private GetDeliveryOffersRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetDeliveryOffersRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetDeliveryOffersRequest"
     */
    public function testGetDeliveryOffersRequest()
    {
        $this->assertInstanceOf(GetDeliveryOffersRequest::class, $this->model);
    }

    /**
     * Test attribute "product"
     */
    public function testPropertyProduct()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\v2020_07_01\GetDeliveryOffersProduct();
        
        $this->model->setProduct($testValue);
        $this->assertEquals($testValue, $this->model->getProduct());
    }

    /**
     * Test attribute "terms"
     */
    public function testPropertyTerms()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\v2020_07_01\GetDeliveryOffersTerms();
        
        $this->model->setTerms($testValue);
        $this->assertEquals($testValue, $this->model->getTerms());
    }
}

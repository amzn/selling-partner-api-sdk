<?php
/**
 * ListPrepDetailsResponseTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\ListPrepDetailsResponse;

/**
 * ListPrepDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response to the &#x60;listPrepDetails&#x60; operation.
 * @package     SpApi
 */
class ListPrepDetailsResponseTest extends TestCase
{

    private ListPrepDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListPrepDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListPrepDetailsResponse"
     */
    public function testListPrepDetailsResponse()
    {
        $this->assertInstanceOf(ListPrepDetailsResponse::class, $this->model);
    }

    /**
     * Test attribute "msku_prep_details"
     */
    public function testPropertyMskuPrepDetails()
    {
        $testValue = [];
        
        $this->model->setMskuPrepDetails($testValue);
        $this->assertEquals($testValue, $this->model->getMskuPrepDetails());
    }
}

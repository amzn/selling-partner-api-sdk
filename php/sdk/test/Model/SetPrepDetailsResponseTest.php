<?php
/**
 * SetPrepDetailsResponseTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\SetPrepDetailsResponse;

/**
 * SetPrepDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;setPrepDetails&#x60; response.
 * @package     SpApi
 */
class SetPrepDetailsResponseTest extends TestCase
{

    private SetPrepDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SetPrepDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SetPrepDetailsResponse"
     */
    public function testSetPrepDetailsResponse()
    {
        $this->assertInstanceOf(SetPrepDetailsResponse::class, $this->model);
    }

    /**
     * Test attribute "operation_id"
     */
    public function testPropertyOperationId()
    {
        $testValue = 'test';
        
        $this->model->setOperationId($testValue);
        $this->assertEquals($testValue, $this->model->getOperationId());
    }
}

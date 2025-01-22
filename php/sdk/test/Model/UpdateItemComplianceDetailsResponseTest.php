<?php
/**
 * UpdateItemComplianceDetailsResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\UpdateItemComplianceDetailsResponse;

/**
 * UpdateItemComplianceDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;updateItemComplianceDetails&#x60; response.
 * @package     OpenAPI\Client
 */
class UpdateItemComplianceDetailsResponseTest extends TestCase
{

    private UpdateItemComplianceDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateItemComplianceDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateItemComplianceDetailsResponse"
     */
    public function testUpdateItemComplianceDetailsResponse()
    {
        $this->assertInstanceOf(UpdateItemComplianceDetailsResponse::class, $this->model);
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

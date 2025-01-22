<?php
/**
 * UpdateInboundPlanNameRequestTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\UpdateInboundPlanNameRequest;

/**
 * UpdateInboundPlanNameRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;updateInboundPlanName&#x60; request.
 * @package     OpenAPI\Client
 */
class UpdateInboundPlanNameRequestTest extends TestCase
{

    private UpdateInboundPlanNameRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateInboundPlanNameRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateInboundPlanNameRequest"
     */
    public function testUpdateInboundPlanNameRequest()
    {
        $this->assertInstanceOf(UpdateInboundPlanNameRequest::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }
}

<?php
/**
 * UpdateSupplySourceStatusRequestTest
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
use SpApi\Model\supplySources\v2020_07_01\UpdateSupplySourceStatusRequest;

/**
 * UpdateSupplySourceStatusRequestTest Class Doc Comment
 *
 * @category    Class
 * @description A request to update the status of a supply source.
 * @package     SpApi
 */
class UpdateSupplySourceStatusRequestTest extends TestCase
{

    private UpdateSupplySourceStatusRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateSupplySourceStatusRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateSupplySourceStatusRequest"
     */
    public function testUpdateSupplySourceStatusRequest()
    {
        $this->assertInstanceOf(UpdateSupplySourceStatusRequest::class, $this->model);
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new \SpApi\Model\supplySources\v2020_07_01\SupplySourceStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}

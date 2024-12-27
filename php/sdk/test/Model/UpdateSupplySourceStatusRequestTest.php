<?php
/**
 * UpdateSupplySourceStatusRequestTest
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
use OpenAPI\Client\Model\supplysources\UpdateSupplySourceStatusRequest;

/**
 * UpdateSupplySourceStatusRequestTest Class Doc Comment
 *
 * @category    Class
 * @description A request to update the status of a supply source.
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\supplysources\SupplySourceStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}

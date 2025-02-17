<?php
/**
 * RequestedValueAddedServiceTest
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
use SpApi\Model\shipping\v2\RequestedValueAddedService;

/**
 * RequestedValueAddedServiceTest Class Doc Comment
 *
 * @category    Class
 * @description A value-added service to be applied to a shipping service purchase.
 * @package     SpApi
 */
class RequestedValueAddedServiceTest extends TestCase
{

    private RequestedValueAddedService $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RequestedValueAddedService();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RequestedValueAddedService"
     */
    public function testRequestedValueAddedService()
    {
        $this->assertInstanceOf(RequestedValueAddedService::class, $this->model);
    }

    /**
     * Test attribute "id"
     */
    public function testPropertyId()
    {
        $testValue = 'test';
        
        $this->model->setId($testValue);
        $this->assertEquals($testValue, $this->model->getId());
    }
}

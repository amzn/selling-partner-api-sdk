<?php
/**
 * AppointmentResourceTest
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
use SpApi\Model\services\v1\AppointmentResource;

/**
 * AppointmentResourceTest Class Doc Comment
 *
 * @category    Class
 * @description The resource that performs or performed appointment fulfillment.
 * @package     SpApi
 */
class AppointmentResourceTest extends TestCase
{

    private AppointmentResource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AppointmentResource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AppointmentResource"
     */
    public function testAppointmentResource()
    {
        $this->assertInstanceOf(AppointmentResource::class, $this->model);
    }

    /**
     * Test attribute "resource_id"
     */
    public function testPropertyResourceId()
    {
        $testValue = 'test';
        
        $this->model->setResourceId($testValue);
        $this->assertEquals($testValue, $this->model->getResourceId());
    }
}

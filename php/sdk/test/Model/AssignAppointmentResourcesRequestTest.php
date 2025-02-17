<?php
/**
 * AssignAppointmentResourcesRequestTest
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
use SpApi\Model\services\v1\AssignAppointmentResourcesRequest;

/**
 * AssignAppointmentResourcesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema for the &#x60;assignAppointmentResources&#x60; operation.
 * @package     SpApi
 */
class AssignAppointmentResourcesRequestTest extends TestCase
{

    private AssignAppointmentResourcesRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AssignAppointmentResourcesRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AssignAppointmentResourcesRequest"
     */
    public function testAssignAppointmentResourcesRequest()
    {
        $this->assertInstanceOf(AssignAppointmentResourcesRequest::class, $this->model);
    }

    /**
     * Test attribute "resources"
     */
    public function testPropertyResources()
    {
        $testValue = [];
        
        $this->model->setResources($testValue);
        $this->assertEquals($testValue, $this->model->getResources());
    }
}

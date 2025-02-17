<?php
/**
 * AssignAppointmentResourcesResponsePayloadTest
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
use SpApi\Model\services\v1\AssignAppointmentResourcesResponsePayload;

/**
 * AssignAppointmentResourcesResponsePayloadTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the &#x60;assignAppointmentResource&#x60; operation.
 * @package     SpApi
 */
class AssignAppointmentResourcesResponsePayloadTest extends TestCase
{

    private AssignAppointmentResourcesResponsePayload $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AssignAppointmentResourcesResponsePayload();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AssignAppointmentResourcesResponsePayload"
     */
    public function testAssignAppointmentResourcesResponsePayload()
    {
        $this->assertInstanceOf(AssignAppointmentResourcesResponsePayload::class, $this->model);
    }

    /**
     * Test attribute "warnings"
     */
    public function testPropertyWarnings()
    {
        $testValue = [];
        
        $this->model->setWarnings($testValue);
        $this->assertEquals($testValue, $this->model->getWarnings());
    }
}

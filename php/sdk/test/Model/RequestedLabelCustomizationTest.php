<?php
/**
 * RequestedLabelCustomizationTest
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
use SpApi\Model\shipping\v2\RequestedLabelCustomization;

/**
 * RequestedLabelCustomizationTest Class Doc Comment
 *
 * @category    Class
 * @description Object contains customised data requested by a shipper to be printed on a shipping label.
 * @package     SpApi
 */
class RequestedLabelCustomizationTest extends TestCase
{

    private RequestedLabelCustomization $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RequestedLabelCustomization();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RequestedLabelCustomization"
     */
    public function testRequestedLabelCustomization()
    {
        $this->assertInstanceOf(RequestedLabelCustomization::class, $this->model);
    }

    /**
     * Test attribute "request_attributes"
     */
    public function testPropertyRequestAttributes()
    {
        $testValue = [];
        
        $this->model->setRequestAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getRequestAttributes());
    }
}

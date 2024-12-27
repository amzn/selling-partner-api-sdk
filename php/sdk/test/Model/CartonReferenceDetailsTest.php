<?php
/**
 * CartonReferenceDetailsTest
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
use OpenAPI\Client\Model\vendor.shipments\CartonReferenceDetails;

/**
 * CartonReferenceDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Carton reference details.
 * @package     OpenAPI\Client
 */
class CartonReferenceDetailsTest extends TestCase
{

    private CartonReferenceDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CartonReferenceDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CartonReferenceDetails"
     */
    public function testCartonReferenceDetails()
    {
        $this->assertInstanceOf(CartonReferenceDetails::class, $this->model);
    }

    /**
     * Test attribute "carton_count"
     */
    public function testPropertyCartonCount()
    {
        $testValue = 123;
        
        $this->model->setCartonCount($testValue);
        $this->assertEquals($testValue, $this->model->getCartonCount());
    }

    /**
     * Test attribute "carton_reference_numbers"
     */
    public function testPropertyCartonReferenceNumbers()
    {
        $testValue = [];
        
        $this->model->setCartonReferenceNumbers($testValue);
        $this->assertEquals($testValue, $this->model->getCartonReferenceNumbers());
    }
}

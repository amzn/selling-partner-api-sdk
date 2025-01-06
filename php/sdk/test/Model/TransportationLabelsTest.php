<?php
/**
 * TransportationLabelsTest
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
use OpenAPI\Client\Model\vendorShipments\TransportationLabels;

/**
 * TransportationLabelsTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the GetShipmentLabels operation.
 * @package     OpenAPI\Client
 */
class TransportationLabelsTest extends TestCase
{

    private TransportationLabels $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportationLabels();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportationLabels"
     */
    public function testTransportationLabels()
    {
        $this->assertInstanceOf(TransportationLabels::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorShipments\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "transport_labels"
     */
    public function testPropertyTransportLabels()
    {
        $testValue = [];
        
        $this->model->setTransportLabels($testValue);
        $this->assertEquals($testValue, $this->model->getTransportLabels());
    }
}

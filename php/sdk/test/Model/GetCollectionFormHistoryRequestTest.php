<?php
/**
 * GetCollectionFormHistoryRequestTest
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
use OpenAPI\Client\Model\shipping\GetCollectionFormHistoryRequest;

/**
 * GetCollectionFormHistoryRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema to get query collections form history API .
 * @package     OpenAPI\Client
 */
class GetCollectionFormHistoryRequestTest extends TestCase
{

    private GetCollectionFormHistoryRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetCollectionFormHistoryRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetCollectionFormHistoryRequest"
     */
    public function testGetCollectionFormHistoryRequest()
    {
        $this->assertInstanceOf(GetCollectionFormHistoryRequest::class, $this->model);
    }

    /**
     * Test attribute "client_reference_details"
     */
    public function testPropertyClientReferenceDetails()
    {
        $testValue = [];
        
        $this->model->setClientReferenceDetails($testValue);
        $this->assertEquals($testValue, $this->model->getClientReferenceDetails());
    }

    /**
     * Test attribute "max_results"
     */
    public function testPropertyMaxResults()
    {
        $testValue = 123;
        
        $this->model->setMaxResults($testValue);
        $this->assertEquals($testValue, $this->model->getMaxResults());
    }

    /**
     * Test attribute "carrier_id"
     */
    public function testPropertyCarrierId()
    {
        $testValue = 'test';
        
        $this->model->setCarrierId($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierId());
    }

    /**
     * Test attribute "ship_from_address"
     */
    public function testPropertyShipFromAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\Address();
        
        $this->model->setShipFromAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromAddress());
    }

    /**
     * Test attribute "date_range"
     */
    public function testPropertyDateRange()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\DateRange();
        
        $this->model->setDateRange($testValue);
        $this->assertEquals($testValue, $this->model->getDateRange());
    }
}

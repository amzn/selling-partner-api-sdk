<?php
/**
 * GenerateCollectionFormRequestTest
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
use SpApi\Model\shipping\v2\GenerateCollectionFormRequest;

/**
 * GenerateCollectionFormRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema Call to generate the collection form.
 * @package     SpApi
 */
class GenerateCollectionFormRequestTest extends TestCase
{

    private GenerateCollectionFormRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerateCollectionFormRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerateCollectionFormRequest"
     */
    public function testGenerateCollectionFormRequest()
    {
        $this->assertInstanceOf(GenerateCollectionFormRequest::class, $this->model);
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
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setShipFromAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromAddress());
    }
}

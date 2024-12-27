<?php
/**
 * CreateShippingLabelsRequestTest
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
use OpenAPI\Client\Model\vendor.df.shipping\CreateShippingLabelsRequest;

/**
 * CreateShippingLabelsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body for the createShippingLabels operation.
 * @package     OpenAPI\Client
 */
class CreateShippingLabelsRequestTest extends TestCase
{

    private CreateShippingLabelsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateShippingLabelsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateShippingLabelsRequest"
     */
    public function testCreateShippingLabelsRequest()
    {
        $this->assertInstanceOf(CreateShippingLabelsRequest::class, $this->model);
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "containers"
     */
    public function testPropertyContainers()
    {
        $testValue = [];
        
        $this->model->setContainers($testValue);
        $this->assertEquals($testValue, $this->model->getContainers());
    }
}

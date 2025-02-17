<?php
/**
 * GetCarrierAccountsRequestTest
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
use SpApi\Model\shipping\v2\GetCarrierAccountsRequest;

/**
 * GetCarrierAccountsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the GetCarrierAccounts operation.
 * @package     SpApi
 */
class GetCarrierAccountsRequestTest extends TestCase
{

    private GetCarrierAccountsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetCarrierAccountsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetCarrierAccountsRequest"
     */
    public function testGetCarrierAccountsRequest()
    {
        $this->assertInstanceOf(GetCarrierAccountsRequest::class, $this->model);
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
}

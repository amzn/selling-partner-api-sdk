<?php
/**
 * UnlinkCarrierAccountRequestTest
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
use OpenAPI\Client\Model\shipping\v2\UnlinkCarrierAccountRequest;

/**
 * UnlinkCarrierAccountRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for remove the Carrier Account associated with the provided merchant.
 * @package     OpenAPI\Client
 */
class UnlinkCarrierAccountRequestTest extends TestCase
{

    private UnlinkCarrierAccountRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UnlinkCarrierAccountRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UnlinkCarrierAccountRequest"
     */
    public function testUnlinkCarrierAccountRequest()
    {
        $this->assertInstanceOf(UnlinkCarrierAccountRequest::class, $this->model);
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

<?php
/**
 * GetCarrierAccountFormInputsResponseTest
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
use OpenAPI\Client\Model\shipping\GetCarrierAccountFormInputsResponse;

/**
 * GetCarrierAccountFormInputsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the GetCarrierAccountFormInputsResponse operation.
 * @package     OpenAPI\Client
 */
class GetCarrierAccountFormInputsResponseTest extends TestCase
{

    private GetCarrierAccountFormInputsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetCarrierAccountFormInputsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetCarrierAccountFormInputsResponse"
     */
    public function testGetCarrierAccountFormInputsResponse()
    {
        $this->assertInstanceOf(GetCarrierAccountFormInputsResponse::class, $this->model);
    }

    /**
     * Test attribute "linkable_carriers_list"
     */
    public function testPropertyLinkableCarriersList()
    {
        $testValue = [];
        
        $this->model->setLinkableCarriersList($testValue);
        $this->assertEquals($testValue, $this->model->getLinkableCarriersList());
    }
}

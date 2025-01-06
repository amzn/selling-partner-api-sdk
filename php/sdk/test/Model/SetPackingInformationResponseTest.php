<?php
/**
 * SetPackingInformationResponseTest
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
use OpenAPI\Client\Model\fulfillmentInbound\SetPackingInformationResponse;

/**
 * SetPackingInformationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;setPackingInformation&#x60; response.
 * @package     OpenAPI\Client
 */
class SetPackingInformationResponseTest extends TestCase
{

    private SetPackingInformationResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SetPackingInformationResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SetPackingInformationResponse"
     */
    public function testSetPackingInformationResponse()
    {
        $this->assertInstanceOf(SetPackingInformationResponse::class, $this->model);
    }

    /**
     * Test attribute "operation_id"
     */
    public function testPropertyOperationId()
    {
        $testValue = 'test';
        
        $this->model->setOperationId($testValue);
        $this->assertEquals($testValue, $this->model->getOperationId());
    }
}

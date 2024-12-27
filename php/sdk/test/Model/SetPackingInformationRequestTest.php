<?php
/**
 * SetPackingInformationRequestTest
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
use OpenAPI\Client\Model\fulfillmentinbound\SetPackingInformationRequest;

/**
 * SetPackingInformationRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;setPackingInformation&#x60; request.
 * @package     OpenAPI\Client
 */
class SetPackingInformationRequestTest extends TestCase
{

    private SetPackingInformationRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SetPackingInformationRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SetPackingInformationRequest"
     */
    public function testSetPackingInformationRequest()
    {
        $this->assertInstanceOf(SetPackingInformationRequest::class, $this->model);
    }

    /**
     * Test attribute "package_groupings"
     */
    public function testPropertyPackageGroupings()
    {
        $testValue = [];
        
        $this->model->setPackageGroupings($testValue);
        $this->assertEquals($testValue, $this->model->getPackageGroupings());
    }
}

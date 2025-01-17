<?php
/**
 * ConfirmTransportationOptionsRequestTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ConfirmTransportationOptionsRequest;

/**
 * ConfirmTransportationOptionsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;confirmTransportationOptions&#x60; request.
 * @package     OpenAPI\Client
 */
class ConfirmTransportationOptionsRequestTest extends TestCase
{

    private ConfirmTransportationOptionsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConfirmTransportationOptionsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConfirmTransportationOptionsRequest"
     */
    public function testConfirmTransportationOptionsRequest()
    {
        $this->assertInstanceOf(ConfirmTransportationOptionsRequest::class, $this->model);
    }

    /**
     * Test attribute "transportation_selections"
     */
    public function testPropertyTransportationSelections()
    {
        $testValue = [];
        
        $this->model->setTransportationSelections($testValue);
        $this->assertEquals($testValue, $this->model->getTransportationSelections());
    }
}

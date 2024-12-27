<?php
/**
 * GetItemEligibilityPreviewResponseTest
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
use OpenAPI\Client\Model\fbainbound\GetItemEligibilityPreviewResponse;

/**
 * GetItemEligibilityPreviewResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getItemEligibilityPreview operation.
 * @package     OpenAPI\Client
 */
class GetItemEligibilityPreviewResponseTest extends TestCase
{

    private GetItemEligibilityPreviewResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetItemEligibilityPreviewResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetItemEligibilityPreviewResponse"
     */
    public function testGetItemEligibilityPreviewResponse()
    {
        $this->assertInstanceOf(GetItemEligibilityPreviewResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\fbainbound\ItemEligibilityPreview();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}

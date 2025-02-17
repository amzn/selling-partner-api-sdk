<?php
/**
 * GetItemEligibilityPreviewResponseTest
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
use SpApi\Model\fba\eligibility\v1\GetItemEligibilityPreviewResponse;

/**
 * GetItemEligibilityPreviewResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getItemEligibilityPreview operation.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\fba\eligibility\v1\ItemEligibilityPreview();
        
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

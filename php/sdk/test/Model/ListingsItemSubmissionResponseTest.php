<?php
/**
 * ListingsItemSubmissionResponseTest
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
use OpenAPI\Client\Model\listingsItems\ListingsItemSubmissionResponse;

/**
 * ListingsItemSubmissionResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response containing the results of a submission to the Selling Partner API for Listings Items.
 * @package     OpenAPI\Client
 */
class ListingsItemSubmissionResponseTest extends TestCase
{

    private ListingsItemSubmissionResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListingsItemSubmissionResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListingsItemSubmissionResponse"
     */
    public function testListingsItemSubmissionResponse()
    {
        $this->assertInstanceOf(ListingsItemSubmissionResponse::class, $this->model);
    }

    /**
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new ListingsItemSubmissionResponse();
        $allowedValues = $enumInstance->getStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "submission_id"
     */
    public function testPropertySubmissionId()
    {
        $testValue = 'test';
        
        $this->model->setSubmissionId($testValue);
        $this->assertEquals($testValue, $this->model->getSubmissionId());
    }

    /**
     * Test attribute "issues"
     */
    public function testPropertyIssues()
    {
        $testValue = [];
        
        $this->model->setIssues($testValue);
        $this->assertEquals($testValue, $this->model->getIssues());
    }

    /**
     * Test attribute "identifiers"
     */
    public function testPropertyIdentifiers()
    {
        $testValue = [];
        
        $this->model->setIdentifiers($testValue);
        $this->assertEquals($testValue, $this->model->getIdentifiers());
    }
}

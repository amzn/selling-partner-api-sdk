<?php
/**
 * CreateWarrantyRequestTest
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
use SpApi\Model\messaging\v1\CreateWarrantyRequest;

/**
 * CreateWarrantyRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createWarranty operation.
 * @package     SpApi
 */
class CreateWarrantyRequestTest extends TestCase
{

    private CreateWarrantyRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateWarrantyRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateWarrantyRequest"
     */
    public function testCreateWarrantyRequest()
    {
        $this->assertInstanceOf(CreateWarrantyRequest::class, $this->model);
    }

    /**
     * Test attribute "attachments"
     */
    public function testPropertyAttachments()
    {
        $testValue = [];
        
        $this->model->setAttachments($testValue);
        $this->assertEquals($testValue, $this->model->getAttachments());
    }

    /**
     * Test attribute "coverage_start_date"
     */
    public function testPropertyCoverageStartDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCoverageStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getCoverageStartDate());
    }

    /**
     * Test attribute "coverage_end_date"
     */
    public function testPropertyCoverageEndDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCoverageEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getCoverageEndDate());
    }
}

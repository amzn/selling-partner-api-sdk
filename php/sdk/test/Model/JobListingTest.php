<?php
/**
 * JobListingTest
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
use SpApi\Model\services\v1\JobListing;

/**
 * JobListingTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the &#x60;getServiceJobs&#x60; operation.
 * @package     SpApi
 */
class JobListingTest extends TestCase
{

    private JobListing $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new JobListing();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "JobListing"
     */
    public function testJobListing()
    {
        $this->assertInstanceOf(JobListing::class, $this->model);
    }

    /**
     * Test attribute "total_result_size"
     */
    public function testPropertyTotalResultSize()
    {
        $testValue = 123;
        
        $this->model->setTotalResultSize($testValue);
        $this->assertEquals($testValue, $this->model->getTotalResultSize());
    }

    /**
     * Test attribute "next_page_token"
     */
    public function testPropertyNextPageToken()
    {
        $testValue = 'test';
        
        $this->model->setNextPageToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextPageToken());
    }

    /**
     * Test attribute "previous_page_token"
     */
    public function testPropertyPreviousPageToken()
    {
        $testValue = 'test';
        
        $this->model->setPreviousPageToken($testValue);
        $this->assertEquals($testValue, $this->model->getPreviousPageToken());
    }

    /**
     * Test attribute "jobs"
     */
    public function testPropertyJobs()
    {
        $testValue = [];
        
        $this->model->setJobs($testValue);
        $this->assertEquals($testValue, $this->model->getJobs());
    }
}

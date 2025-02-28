<?php
/**
 * AsinMetadataTest
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
use SpApi\Model\aplusContent\v2020_11_01\AsinMetadata;

/**
 * AsinMetadataTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content ASIN with additional metadata for content management. If you don&#39;t include the &#x60;includedDataSet&#x60; parameter in a call to the &#x60;listContentDocumentAsinRelations&#x60; operation, the related ASINs are returned without metadata.
 * @package     SpApi
 */
class AsinMetadataTest extends TestCase
{

    private AsinMetadata $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AsinMetadata();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AsinMetadata"
     */
    public function testAsinMetadata()
    {
        $this->assertInstanceOf(AsinMetadata::class, $this->model);
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "badge_set"
     */
    public function testPropertyBadgeSet()
    {
        $testValue = [];
        
        $this->model->setBadgeSet($testValue);
        $this->assertEquals($testValue, $this->model->getBadgeSet());
    }

    /**
     * Test attribute "parent"
     */
    public function testPropertyParent()
    {
        $testValue = 'test';
        
        $this->model->setParent($testValue);
        $this->assertEquals($testValue, $this->model->getParent());
    }

    /**
     * Test attribute "title"
     */
    public function testPropertyTitle()
    {
        $testValue = 'test';
        
        $this->model->setTitle($testValue);
        $this->assertEquals($testValue, $this->model->getTitle());
    }

    /**
     * Test attribute "image_url"
     */
    public function testPropertyImageUrl()
    {
        $testValue = 'test';
        
        $this->model->setImageUrl($testValue);
        $this->assertEquals($testValue, $this->model->getImageUrl());
    }

    /**
     * Test attribute "content_reference_key_set"
     */
    public function testPropertyContentReferenceKeySet()
    {
        $testValue = [];
        
        $this->model->setContentReferenceKeySet($testValue);
        $this->assertEquals($testValue, $this->model->getContentReferenceKeySet());
    }
}
